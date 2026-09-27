# Security Specification: JAMBix CBT Engine Firestore Rules

## 1. Data Invariants
1. **User Profiles (`/users/{userId}`)**:
   - `id` must equal `request.auth.uid`.
   - Only the authenticated owner or admin can read or write their own profile (PII protection for email & phone).
   - `email` must match the authenticated token or validated email.
   - `createdAt` is immutable upon update.

2. **Test Results (`/testResults/{resultId}`)**:
   - `userId` must equal `request.auth.uid`.
   - Tests can only be created by the candidate taking the test.
   - A candidate can only read and list their own test records (`resource.data.userId == request.auth.uid`).
   - Scores cannot be modified arbitrarily after submission (`allow update: if false`).

3. **Feed Posts (`/posts/{postId}`)**:
   - Anyone signed in can read posts (`allow read: if true`).
   - Only signed in authenticated candidates can create a post.
   - `authorId` must match `request.auth.uid`.
   - Authors can update their title/content, or users can like/comment with constrained diff checks.

4. **Default Catch-All**:
   - All other unmatched documents are strictly denied (`allow read, write: if false`).

## 2. Dirty Dozen Malicious Payloads (Expected to be REJECTED)
1. Write to `/users/{otherUserId}` with mismatched `id`.
2. Write to `/users/{userId}` with string length > 100 for `fullName`.
3. Write to `/users/{userId}` with ghost field `isAdmin: true` (Shadow update).
4. Update `/users/{userId}` mutating immutable `createdAt`.
5. Read `/users/{otherUserId}` by unauthenticated or non-owner user (PII bypass).
6. Create `/testResults/{id}` where `userId` does not match `request.auth.uid` (Impersonation).
7. Create `/testResults/{id}` with negative score or score exceeding question count.
8. Update `/testResults/{id}` to alter score after submission (Outcome tampering).
9. Create `/posts/{id}` where `authorId != request.auth.uid`.
10. Create `/posts/{id}` with 10MB text payload in `content`.
11. Query `/testResults` without filtering by `userId == request.auth.uid` (Data scraping).
12. Attempt to write to arbitrary path `/secret_keys/{id}` (Path traversal / default allow).
