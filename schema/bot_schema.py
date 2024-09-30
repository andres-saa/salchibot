from pydantic import BaseModel
from typing import List, Optional

class Intent(BaseModel):
    name: str

class Pattern(BaseModel):
    id: Optional[int] = None
    pattern: List[str]  # Un arreglo de palabras que forma el patrón

class Response(BaseModel):
    id: Optional[int] = None
    response: str

class IntentPattern(BaseModel):
    intent_id: int
    pattern_id: int

class IntentResponse(BaseModel):
    intent_id: int
    response_id: int


class train(BaseModel):
    intent_id:int
    paterns:List[list[str]]
    responses:list[str]