from fastapi import APIRouter
from pydantic.types import UUID, List

from app.core.models.entities.Tutorial import Tutorial
from app.core.usecases.tutorial import crud_usecase

router = APIRouter(prefix="/tutorial")


@router.get("/", response_model=List[Tutorial])
async def read_all() -> List[Tutorial]:
    return crud_usecase.read_all()


@router.get("/{id}", response_model=Tutorial)
async def read_one_by_id(id: UUID) -> Tutorial:
    return crud_usecase.read_one_by_id(id)


@router.post("/", response_model=Tutorial)
async def create_one(entity: Tutorial) -> Tutorial:
    return crud_usecase.create_one(entity)


@router.patch("/{id}", response_model=Tutorial)
async def patch_one_by_id(id: UUID, entity: Tutorial) -> Tutorial:
    return crud_usecase.patch_one_by_id(id, entity)


@router.delete("/{id}", response_model=Tutorial)
async def delete_one_by_id(id: UUID) -> Tutorial:
    return crud_usecase.delete_one_by_id(id)
