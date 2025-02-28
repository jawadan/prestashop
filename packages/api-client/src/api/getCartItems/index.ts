// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function getCartItems(context, params) {
  const {psCookieKey, psCookieValue} = params;
  const url = new URL('/rest/cart', context.config.api.url);

  url.searchParams.set('image_size', 'medium_default');

  if (psCookieKey && psCookieValue) {
    // It's not possible to get cart items without cookies (or any operation on cart)
    const { data } = await context.client.get(url.href, {
      headers: {
        Cookie: psCookieKey + '=' + psCookieValue + ';'
      }
    });

    return {data};
  } else {
    return {};
  }
}
