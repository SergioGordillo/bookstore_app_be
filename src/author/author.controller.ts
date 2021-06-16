import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createAuthorDTO } from './dto/create-author.dto';

@Controller('author')
export class AuthorController {
    @Get()
    getManyAuthors(){
        return "OK";
    }

    @Get(':id')
    getAuthorById(@Param('id')id:string){
        return "getAuthorById";
    }

    @Post('create')
    createAuthor(@Body() dto:createAuthorDTO ){
        return dto;
    }

    @Put('update')
    updateNewAuthor(@Param('id')id:string){
        return "Update new author";
    }

    @Delete('delete')
    deleteAuthor(@Param('id')id:string){
        return "Delete author"; 
    }
}
