import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/sevices/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      return res.send({ success: true, data: customer, msg: 'customer found' });
    }
    return res.status(400).send({ success: false, msg: 'customer not found' });
  }
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      return customer;
    } else {
      throw new HttpException('Customers Not found', HttpStatus.BAD_REQUEST);
    }
  }
  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);
  }
}
