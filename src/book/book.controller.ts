import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('book')
export class BookController {

    @Get()
    getManyBooks(){
        return "OK";
    }

    @Get(':id')
    getBookById(){
        return "getBookById";
    }

    @Post('create')
    createNewBook(){
        return "Create new book";
    }

    @Put('update')
    updateNewBook(){
        return "Update new book";
    }
}
