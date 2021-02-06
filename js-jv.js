
                var seven = ["Meliodas", "Ban" , "Elisa"]
                // Show All list in array 
                document.getElementById("showarr").innerHTML = seven; 

                // Show Access the Elements of Array var[0]
                document.getElementById("showacc").innerHTML = seven[0]; 


                // Show Changing Access in the Elements of Array
                seven[0] = "conan" ;
                document.getElementById("showch").innerHTML = seven[0]


                
                // Show Converting Arrays to Strings
                document.getElementById("showcon").innerHTML = seven.toString();

                
                // Show Converting Arrays to Strings With Join()
                document.getElementById("showjoin").innerHTML = seven.join(" x ");


                // Show Sorting an Array
                var sports = ["rugby", "bowling", "badminton", "football"]
                document.getElementById("showsobe").innerHTML = sports;
                sports  = sports.sort();
                document.getElementById("showsoaf").innerHTML = sports;


                
                // Show Reversing an Array
                document.getElementById("showrebe").innerHTML = sports;
                sports  = sports.reverse();
                document.getElementById("showreaf").innerHTML = sports;


                //Show Numeric Sort an Array
                var number = ["10","60","900","8000","100"];
                number = number.sort(function(a, b){return a - b});
                document.getElementById("shownube").innerHTML = number;
                number = number.sort(function(a, b){return  b - a});
                document.getElementById("shownuaf").innerHTML = number;

                //Show find Max in Array
                var numbermax = [100,60,200,9000,20];
                document.getElementById("showmax").innerHTML = findmax(numbermax);

                function findmax(arr) {
                    return Math.max.apply(null,arr);
                }

                //Show find Min in Array
                var numbermin = [100,60,200,9000,20];
                document.getElementById("showmin").innerHTML = findmin(numbermin);

                function findmin(arr) {
                    return Math.min.apply(null,arr);
                }

                var txtfor = "";
                var numberfor = [100,60,200,9000,20];
                numberfor.forEach(forfuntion);
                document.getElementById("showfor").innerHTML = txtfor;

                function forfuntion(value){
                    txtfor = txtfor + value + "<br>";
                }


                //Show map in Array
                var numbermap = [100,60,200,9000,20];
                var numbermap2 = numbermap.map(mapfunction);
                document.getElementById("showmap").innerHTML = numbermap2;

                function mapfunction (value){
                    return value / 2;
                }

                //Show filter in Array
                var numberfil = [90,18,20,30,60];
                var newnumber = numberfil.filter(filterfuntion);
                document.getElementById("showfil").innerHTML = newnumber;

                function filterfuntion (value, index, array){
                    return value > 20;
                }

                //Show reduce in Array
                var numberre = [100,10,20,30,60];
                var newnumberre =  numberre.reduce(reducefunctcon);
                document.getElementById("showre").innerHTML = newnumberre;

                function reducefunctcon(total , value){
                    return total - value;
                }

