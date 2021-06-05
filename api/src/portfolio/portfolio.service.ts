import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { Portfolio } from './portfolio.model';

@Injectable()
export class PortfolioService {
  private portfolio = [];

  getAllPortfolio(): Portfolio[] {
    return this.portfolio;
  }

  createPortfolio(createPortfolioDto: CreatePortfolioDto): Portfolio {
    const { category } = createPortfolioDto;

    const portfolio: Portfolio = {
      category,
    };

    this.portfolio.push(portfolio);

    return portfolio;
  }
}
