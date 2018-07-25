using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HappyNumber.Controllers
{

    [Route("api/[controller]")]
    public class MathController
    {
        public bool IsHappyNumber(int number)
        {
            bool result = false;

            HashSet<int> prevSums = new HashSet<int>();

            while (prevSums.Add(number)) // if false the number already exists in hashset
            {
                int sum = 0;
                while (number > 0)
                {
                    sum += (int)Math.Pow(number % 10, 2);
                    number = number / 10;
                }
                number = sum;
            }

            if (number == 1) result = true;

            return result;
        }
    }


    
}
