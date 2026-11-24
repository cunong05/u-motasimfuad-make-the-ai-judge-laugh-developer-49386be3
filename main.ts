// Entry for "Make the AI Judge Laugh: Developer Excuses" (make.fun)
// One funny single-line excuse a developer gives when code breaks in production.

const ENTRY =
  "Production didn't break — the database fell in love with the test data and eloped to a backup server in Ohio.";

// Length guard: the entry must be a single line under 200 characters.
if (ENTRY.length > 199 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line under 200 characters");
}

console.log(ENTRY);
