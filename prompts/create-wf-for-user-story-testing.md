Create a GitHub Agentic Workflow using the specification from:
https://raw.githubusercontent.com/github/gh-aw/main/create.md

🎯 Objective

Design an agentic workflow that automatically validates user stories by executing end-to-end browser tests on a web application and reporting the results back to the GitHub Issue.

⚡ Trigger
Run when a GitHub Issue is created or updated
Only proceed if the issue contains the label: user-story
📥 Input (from Issue Body)

The issue will include:

Application URL
User Story
Acceptance Criteria (written as test scenarios or steps)
⚙️ Workflow Requirements
1. Parse Issue Content
Extract:
Target URL
Acceptance criteria (convert into testable steps)
2. Browser Automation (MANDATORY)
Use the built-in browser MCP server for all browser interactions
Do NOT rely on standalone Playwright scripts

The agent must use MCP actions such as:

browser.navigate → open the application
browser.click → interact with elements
browser.type → input data
browser.evaluate → validate DOM or state
browser.screenshot → capture evidence
3. Test Execution Logic
Convert each acceptance criterion into a sequence of browser actions
Execute tests step-by-step
Handle dynamic content and async waits appropriately
4. Result Validation
For each acceptance criterion:
Mark as ✅ Pass or ❌ Fail
Capture error details if failed
5. Screenshot Evidence (CRITICAL)
Capture screenshots:
After key actions (navigation, form submission, validation)
On every failure (mandatory)
Screenshots must:
Be saved to the workflow’s artifact/output directory
NOT use hardcoded paths like /app/
Be accessible after workflow execution
6. Reporting

Generate a structured report including:

Total test cases
Passed / Failed count
Step-by-step results per acceptance criterion
References to screenshots
7. Feedback to GitHub Issue
Post a comment on the issue containing:
✅/❌ Overall result
Summary of test execution
Detailed results
Links to uploaded artifacts (screenshots + report)
⚠️ Constraints
Must run fully within GitHub Agentic Workflow environment
Must use browser MCP, not direct Playwright execution
Must ensure screenshots are persisted as artifacts
Avoid hardcoded selectors where possible; adapt dynamically
Ensure reliability for async and dynamic UI behavior
📤 Expected Output
Updated GitHub Issue with test results
Uploaded artifacts:
Screenshots
Test report
Clear pass/fail status for the user story
🔥 (Optional Enhancement – Strongly Recommended)
Retry failed steps once before marking as failed
Log all browser actions for traceability
Use meaningful screenshot names (e.g., login-success.png, checkout-failure.png)