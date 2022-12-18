from fastapi import APIRouter

from app.outer.interfaces.controllers import tutorial_controller

api_router = APIRouter()

api_router.include_router(tutorial_controller.router)
