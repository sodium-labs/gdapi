export class APIError extends Error {
    public constructor(
        message: string,
        options?: ErrorOptions | undefined,
        public response?: Response | null,
    ) {
        super(message, options);
        this.response = response || null;
    }
}
