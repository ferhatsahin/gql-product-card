const resolvers = require('../resolvers')

describe('[Query.products.length]',() => {

  const mockContext = {
    dataSources: {
      products: { products: jest.fn() },
    }
  };
  it('calls lookup from products.js', async () => {

    const res = await resolvers.Query.products(null,{}, mockContext);
    expect(res.length).toEqual(6);
  });
})