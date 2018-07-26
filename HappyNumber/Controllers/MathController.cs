using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HappyNumber.Controllers
{

    
    public class MathController
    {
        [HttpGet]
        [Route("api/IsHappyNumber")]
        public bool IsHappyNumber(int number)
        {
            bool result = false;

            HashSet<int> prevSums = new HashSet<int>();
            int count = 0;

            while (prevSums.Add(number)) // if false the number already exists in hashset
            {
                int sum = 0;
                while (number > 0 && count <=100)
                {
                    sum += (int)Math.Pow(number % 10, 2);
                    number = number / 10;
                    count = count + 1;
                }
                number = sum;
            }

            if (number == 1) result = true;

            return result;
        }
    }


    
}
