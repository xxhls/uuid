import { describe, expect, test } from "@jest/globals";
import uuid from "..";

describe("sum", () => {
  test("generate v4 uuid", () => {
    const UUID_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/;
    expect(uuid()).toMatch(UUID_REGEX);
  });
  test("no repeat", () => {
    const total = 1000;
    let uuids = Array.from({ length: total }, () => uuid());
    uuids = Array.from(new Set(uuids));
    expect(uuids.length).toBe(total);
  });
});
