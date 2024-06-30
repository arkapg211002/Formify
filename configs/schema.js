const { pgTable, serial, text, varchar, integer, boolean } = require("drizzle-orm/pg-core");

export const JsonForms = pgTable('jsonForms', {
    id: serial('id').primaryKey(),
    jsonform: text('jsonform').notNull(),
    theme: varchar('theme'),
    background: varchar('background'),
    style: varchar('style'),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
    enabledSignIn: boolean('enabledSignIn').default(false)
})

export const userResponses = pgTable('userResponses', {
    id: serial('id').primaryKey(),
    jsonResponse: text('jsonResponse').notNull(),
    createdBy: varchar('createdBy').default('anonymus'),
    createdAt: varchar('createdAt').notNull(),
    formRef: integer('formRef').references(() => JsonForms.id)
})

/*

In the SQL Editor run this to add on delete cascade

ALTER TABLE "userResponses"
DROP CONSTRAINT IF EXISTS "userResponses_formRef_jsonForms_id_fk",
ADD CONSTRAINT "userResponses_formRef_jsonForms_id_fk"
FOREIGN KEY ("formRef") REFERENCES "jsonForms" ("id")
ON DELETE CASCADE;

*/