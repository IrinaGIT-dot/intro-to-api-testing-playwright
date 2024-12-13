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

  // add a method to create a new negative instance
  static createLoanCalculationWithNegativeData(): loanCalcDto {
    return new loanCalcDto(19, -3, 60, true, 6, 6)
  }

  // add a method to create a new instance with random data
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
  //| 19 | POST | Calculate risk decision with correct body & it returns Low risk level and positive decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 12}|200|
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
  //| 20 | POST | Calculate risk decision with correct body & it returns Medium risk level and positive decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 10}|200|
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
  //| 21 | POST | Calculate risk decision with correct body & it returns High risk level and positive decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 3}|200|
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
  //| 22 | POST | Calculate risk decision with correct body & it returns Very high risk level and negative decision| {"income": 1000, "debt": 100, "age": 20, "employed": true, "loanAmount": 50, "loanPeriod": 36}|200|
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
  //| 23 | POST | Calculate risk decision with correct body for underage person| {"income": 1000, "debt": 100, "age": 15, "employed": true, "loanAmount": 50, "loanPeriod": 3}|200|
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

  // add a method to create a new empty instance
  static createLoanCalculationWithEmptyData(): loanCalcDto {
    return new loanCalcDto(null, null, null, null, null, null)
  }

  // add a method to create a new negative instance with income = 0
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
