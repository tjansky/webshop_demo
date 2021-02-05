namespace API.Errors
{
    // this is used to return to client when there is exception 
    // we use it in middleware and this object gets returned instead of default one (ugly one :P)
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string message = null, string details = null) : base(statusCode, message)
        {
            Details = details;
        }

        public string Details { get; set; }
    }
}