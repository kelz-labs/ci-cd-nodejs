const app = require("./server");
const supertest = require("supertest");
const request = supertest(app);

it("Call the youtube endpoint", async (done) => {
  const res = await request.get("/youtube");
  expect(res.status).toBe(200);
  expect(res.text).toBe("gwej lagi belajar CI/CD cui");
  done();
});

it("Call the / endpoint", async (done) => {
  const res = await request.get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Udah jalan!");
  done();
});

it("Call the /ping endpoint", async (done) => {
  const res = await request.get("/ping");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Waduh");
  done();
});

it("Call the /hello:name endpoint", async (done) => {
  const res = await request.get("/hello/haikel");
  expect(res.status).toBe(200);
  expect(res.body.message).toBe("Hello Haikel");
  done();
});
