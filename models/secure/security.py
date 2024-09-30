

from fastapi import Depends, HTTPException, Security
import os
from fastapi.security import APIKeyHeader


API_KEY_NAME = "Authorization"
api_key_header = APIKeyHeader(name=API_KEY_NAME, auto_error=False)
from fastapi.security import APIKeyHeader




def verify_api_key(api_key: str = Security(api_key_header)):
    expected_api_key = os.getenv("API_SECRET_TOKEN")
    print(expected_api_key)
    if api_key != expected_api_key:
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return api_key