from pydantic.types import UUID, List

from app.core.models.entities.Tutorial import Tutorial
from app.outer.repositories import tutorial_repository


def read_all() -> List[Tutorial]:
    return tutorial_repository.read_all()


def read_one_by_id(id: UUID) -> Tutorial:
    return tutorial_repository.read_one_by_id(id)


def create_one(entity: Tutorial) -> Tutorial:
    return tutorial_repository.create_one(entity)


def patch_one_by_id(id, entity: Tutorial) -> Tutorial:
    return tutorial_repository.patch_one_by_id(id, entity)


def delete_one_by_id(id) -> Tutorial:
    return tutorial_repository.delete_one_by_id(id)
