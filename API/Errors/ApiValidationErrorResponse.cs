using System.Collections.Generic;

namespace API.Errors
{
    // this is used to return when there is validation error
    // for example "localhost/api/getById/wrongType"

    // we override [ApiControler] in startup class and return this object to client
    // instead of default object
    public class ApiValidationErrorResponse : ApiResponse
    {
        public ApiValidationErrorResponse() : base(400)
        {
        }

        public IEnumerable<string> Errors { get; set; }
    }
}