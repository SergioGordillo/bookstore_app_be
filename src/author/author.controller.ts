import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('author')
export class AuthorController {
    @Get()
    getManyAuthors(){
        return "OK";
    }

    @Get(':id')
    getAuthorById(){
        return "getAuthorById";
    }

    @Post('create')
    createNewAuthor(){
        return "Create new author";
    }

    @Put('update')
    updateNewAuthor(){
        return "Update new author";
    }
}
