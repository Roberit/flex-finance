from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import openai


load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


client = openai.OpenAI(api_key=OPENAI_API_KEY)

app = FastAPI()


class GPTRequest(BaseModel):
    prompt: str
    max_tokens: int = 100

@app.post("/chat")
async def chat_gpt(request: GPTRequest):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": request.prompt}],
            max_tokens=request.max_tokens
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


