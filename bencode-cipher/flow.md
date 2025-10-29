test functions
--> test a case
--> message 
		--> if failed display details
		--> format - ✅ <description>
								 ❌ <description> 
								 <inputs>
								 <expected>
								 <received>

encode
--> encode number
--> encode string
--> encode list

--> type
		--> isArray

decode
--> bencoded Data type check
--> parse bencoded data to number
--> parse bencoded data to string
--> parse bencoded data to list
		--> check data type of the string
		--> if number 
			--> slice the string staring from i upto e
		--> if string
			--> slice the string till the length of data
		--> convert substrings to functions
		--> push to list



--> if l - decode to list - []
	--> get first dataType 
	--> parse and push
