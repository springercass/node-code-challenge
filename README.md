## ⬢ G2i NodeJS Test

Messaging acronyms are everywhere now. Do you know all of them?

Build a REST API for the **World Texting Foundation**, also known as **WTF**.

A sample JSON data file will be provided with a base set of acronym definitions. We expect you to create a NodeJS server
using modern best practices for API development. Please consider the recommendations attached as this will list the
items we are looking for above.

These endpoints should be created:

- **`GET /acronym?from=50&limit=10&search=:search`**
  - ▶ returns a list of acronyms, paginated using query parameters
  - ▶ response headers indicate if there are more results
  - ▶ returns all acronyms that fuzzy match against `:search`
<!-- X **`GET /acronym/:acronym`**
X - ▶ returns the acronym and definition matching `:acronym` -->
- **`GET /random/:count?`**
  - ▶ returns `:count` random acronyms
  - ▶ the acronyms returned should not be adjacent rows from the data
<!-- X **`POST /acronym`**
X - ▶ receives an acronym and definition strings
X - ▶ adds the acronym definition to the db -->
- **`PUT /acronym/:acronym`**
X - ▶ receives an acronym and definition strings
  - ▶ uses an authorization header to ensure acronyms are protected
X - ▶ updates the acronym definition to the db for `:acronym`
- **`DELETE /acronym/:acronym`**
X - ▶ deletes `:acronym`
  - ▶ uses an authorization header to ensure acronyms are protected