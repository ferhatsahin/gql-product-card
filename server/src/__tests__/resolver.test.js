const resolvers = require('../resolvers')

describe('Query products length',() => {

  const mockContext = {
    dataSources: {
      products: { products: jest.fn() },
    }
  };
  it("calls lookup from products.js", async () => {
    // 13 => quantinty of products in products.js
    const res = await resolvers.Query.products(null, {}, mockContext);
    expect(res.length).toEqual(13);
  });
})