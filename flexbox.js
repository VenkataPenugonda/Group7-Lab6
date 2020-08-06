function navshow()
		{
			  var a = document.getElementById("navbar");
			  if(a.className=="nav")
			  {
			  	a.className="nav2";
			  }
			  else
			  {
			  	a.className="nav";
			  }
		}
		function show(l)
		{
			if(document.getElementById(l).style.display == "block")
			{
				document.getElementById(l).style.display = "none";
			}
			else
			{
				document.getElementById(l).style.display = "block";
			}
		}