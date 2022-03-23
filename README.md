## Nest.js | Middleware, Pipes & Interceptors Explained By Example
Follow along notes from Michael Guay on Youtube \
Source: https://www.youtube.com/watch?v=x1W3FJ1RJlM \
All credits to [Michael Guay](https://www.youtube.com/channel/UChNA2S9dtoEMAVGPddbDIJg) for the lesson.

What I learned is that the path a request goes through in order is...
1) **Middleware** - For things like authenticating a user
2) **Guards** - To check a user is authenticated before getting to the controller (manager of the task) among other use cases
3) **Interceptor (before)** - Can be used to log the method, url, userAgent, ip, controller name (ie., AppController), controller handler/method name (ie., getHello). Can also be used to transform incoming data
4) **Pipes** - Can be used to freeze parameters in the request so it isn't mistakenly changed in the code. Also validate input data, transform input data, etc. Typical usage is validating request parameters with built in NestJS pipes like ParseIntPipe, ParseArrayPipe, ParseUUIDPipe
5) **Route handler** - The "manager" that tells the provider (ie., service/worker/task implementer) what to do
6) **Interceptor (after)** - Can get the response and status code after handled by the control handler (ie., the method/function inside the manager). Useful for logging. Can be accessed via `next.handle().pipe(tap(res=>{}))`
7) **Exception filters** - To log errors internally or change the error response into user friendly wording for better UI
Then it becomes a beautiful response

Diagram by Demisx:
![nestjs pipeline](https://i.stack.imgur.com/2lFhd.jpg)
[Source](https://stackoverflow.com/questions/54863655/whats-the-difference-between-interceptor-vs-middleware-vs-filter-in-nest-js)