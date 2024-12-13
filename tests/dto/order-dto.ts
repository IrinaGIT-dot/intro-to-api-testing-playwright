export class OrderDto {
  status: string
  courierId: number
  customerName: string
  customerPhone: string
  comment: string
  id: number

  private constructor(
    status: string,
    courierId: number,
    customerName: string,
    customerPhone: string,
    comment: string,
    id: number,
  ) {
    this.status = status
    this.courierId = courierId
    this.customerName = customerName
    this.customerPhone = customerPhone
    this.comment = comment
    this.id = id
  }

  // add a method to create a new instance with random data
  static createOrderWithRandomData(): OrderDto {
    return new OrderDto(
      'OPEN',
      Math.floor(Math.random() * 100),
      'John Doe',
      '+123456789',
      'Urgent order',
      Math.floor(Math.random() * 100),
    )
  }

  //a method for instance
  static createdOrderWithCorrectData(): OrderDto {
    return new OrderDto('OPEN', 0, 'Harry', '+37255544422', 'hello THYOk', 1)
  }

  //a method to update status of instance
  static updateOrderStatus(): OrderDto {
    return new OrderDto('INPROGRESS', 0, 'Harry', '+37255544422', 'hello THYOk', 1)
  }

  //a method to update status of instance
  static updateOrderStatusToDelivered(): OrderDto {
    return new OrderDto('DELIVERED', 0, 'Harry', '+37255544422', 'hello THYOk', 1)
  }

  //a method to update status of instance
  static updateOrderStatusToClosed(): OrderDto {
    return new OrderDto('CLOSED', 0, 'Harry', '+37255544422', 'hello THYOk', 1)
  }
}
