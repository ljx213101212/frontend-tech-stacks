### Retry mechanism with exponential backoff
1. Retry Interval
    - Start with a small delay (e.g., 30 seconds).
    - Double or incrementally increase the delay with each retry (e.g., 30s → 60s → 120s).
2. Max Retries or Max Interval
    - Define a limit to prevent endless retries (e.g., stop after 3 retries or 5 minutes).
3. Error Handling - (Max retries are exhausted.)
    - Log errors and notify the user after retries are exhausted.