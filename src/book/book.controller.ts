import { Body } from '@nestjs/common';
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createBookDTO } from './dto/create-book.dto';

@Controller('book')
export class BookController {

    @Get()
    getManyBooks(){
        return "OK";
    }

    @Get(':id')
    getBookById(@Param('id')id:string){
        return "getBookById";
    }

    @Post('create')
    createBook(@Body() dto:createBookDTO ){
        return dto;
    }

    @Put('update')
    updateBook(){
        return "Update new book";
    }

    @Delete('delete')
    deleteBook(@Param('id')id:string){
        return "Delete book"; 
    }
}
