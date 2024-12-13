export class loanCalcDto {
  income: number
  debt: number
  age: number
  employed: boolean
  loanAmount: number
  loanPeriod: number

  private constructor(
    income: number,
    debt: number,
    age: number,
    employed: boolean,
    loanAmount: number,
    loanPeriod: number,
  ) {
    this.income = income
    this.debt = debt
    this.age = age
    this.employed = employed
    this.loanAmount = loanAmount
    this.loanPeriod = loanPeriod
  }


  static createLoanCalculationWithNegativeData(): loanCalcDto {
    return new loanCalcDto(19, -3, 60, true, 6, 6)
  }

  static createCalcWithRandomData(): loanCalcDto {
    return new loanCalcDto(
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 100),
      35,
      true,
      9,
      Math.floor(Math.random() * 100),
    )
  }

  static createCalcForLowRisk(): loanCalcDto {
    return new loanCalcDto(
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 100),
      20,
      true,
      50,
      12,
    )
  }

  static createCalcForMediumRisk(): loanCalcDto {
    return new loanCalcDto(
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 100),
      20,
      true,
      50,
      10,
    )
  }

  static createCalcForHighRisk(): loanCalcDto {
    return new loanCalcDto(
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 100),
      20,
      true,
      50,
      3,
    )
  }

  static createCalcForVeryHighRisk(): loanCalcDto {
    return new loanCalcDto(
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 100),
      20,
      true,
      50,
      36,
    )
  }

  static createCalcForUnderagePerson(): loanCalcDto {
    return new loanCalcDto(
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 100),
      15,
      true,
      50,
      12,
    )
  }

  static createLoanCalculationWithEmptyData(): loanCalcDto {
    return new loanCalcDto(0, 0, 0, true, 0, 0)
  }

  static createLoanCalculationWithZeroIncome(): loanCalcDto {
    return new loanCalcDto(
      0,
      Math.floor(Math.random() * 100),
      35,
      true,
      9,
      Math.floor(Math.random() * 100),
    )
  }
}
