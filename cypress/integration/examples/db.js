describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.task("dbQuery", { query: "SELECT * FROM persons" }).then(function (
      result
    ) {
      console.log("asdadsas");
      console.log(result[0].firstname);
    });
  });

  it("Secondtest", () => {
    cy.task("dbQuery", {
      query: " UPDATE persons SET city = 'Kochi' WHERE personid = 2",
    });

    // your cy assertions here
  });
  //insertion command here
  it("Thirdtest", () => {
    cy.task("dbQuery", {
      query:
        "insert into persons values ('4','amal','hiiterstraze 49','Stockholm')",
    });
  });
});
