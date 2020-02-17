import { describe, it } from "mocha";
import st from "supertest";
import app from "../src/index";
import assert from "assert";
import { log } from "util";

describe("CRUD /board", () => {
    const agent = st.agent(app);

    let testId: string;
    let testAdminAuth: string;

    it("Create new board", done => {
        agent
            .post("/board")
            .send({ title: "The created test board!" })
            .expect(200)
            .end((err, res) => {
                const data = res.body;
                testId = data.id;
                testAdminAuth = data.admin_auth;
                done(err);
            });
    });

    it("Get the board", () => {
        return agent
            .get("/board/" + testId)
            .query({ auth: testAdminAuth })
            .expect(200);
    });

    it("Change the title of board", () => {
        return agent
            .put("/board/" + testId)
            .query({ auth: testAdminAuth })
            .send({ title: "Renamed title!" })
            .expect(200)
            .expect(res => assert.equal(res.body.title, "Renamed title!"));
    });

    it("Delete the board", () => {
        return agent
            .delete("/board/" + testId)
            .query({ auth: testAdminAuth })
            .expect(200)
            .expect(res => assert.equal(res.body.title, "Renamed title!"))
            .expect(res => assert.equal(res.body.id, "N/A"));
    })
});

describe("Improper CRUD /board", () => {
    const agent = st.agent(app);

    it("Create new board without any title", () => {
        return agent
            .post("/board")
            .expect(400);
    });

    it("Get board without auth", () => {
        return agent
            .get("/board/FzByAeJK")
            .expect(400);
    });

    it("Get board with invalid auth", () => {
        return agent
            .get("/board/FzByAeJK")
            .query({ auth: "b80d01c2bd4e4f56bce71178b7774697" })
            .expect(403);
    });
});
