import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { Portfolio } from './portfolio.model';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private portfolioService: PortfolioService) {}

  @Get()
  getPortfolio(): Portfolio[] {
    return this.portfolioService.getAllPortfolio();
  }

  @Post()
  createPortfolio(@Body() createPortfolioDto: CreatePortfolioDto): Portfolio {
    return this.portfolioService.createPortfolio(createPortfolioDto);
  }
}
