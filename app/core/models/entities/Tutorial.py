from pydantic import BaseModel
from pydantic.types import UUID
from sqlmodel import SQLModel, Field


class Tutorial(SQLModel, table=True):
    id: UUID = Field(primary_key=True)
    title: str = Field()
    description: str = Field()
