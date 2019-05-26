<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Jackie - Home</title>

<link rel="stylesheet" type="text/css" href="Style.css">
<link rel="stylesheet" type="text/css" href="Print.css">

</head>

<header>
	<div class="NavigationBar">
			
		<img id="HomeButton" src="Heading.png" alt="Navigation Image" height="450" width="1200">
			
		<div class = "HomeButton">
			
			<a href="Home.php"> 
				<img src="Home Button.png" alt="Home Button" width="125" height="50" border="0">
			</a>
			
		</div>
				
		<div class = "BlogButton">
			<a href="Blog.html">
				<img src="BlogButton Box.png" alt="Blog Button" width="125" height="50" border="0">
			</a>
				
		</div>
				
		<div class = "ProjectsButton">
			
			<a href="Project.html">
				<img src="Project Button Box.png" alt="Projects Button" width="125" height="50" border="0">
			</a>
				
		</div>
				
		<div class = "AboutMeButton">
			
			<a href="About Me.html">
				<img src="About Me Button Box.png" alt="About Me Button" width="125" height="50" border="0">
			</a>
				
		</div>
				
		<div class = "ContactButton">	
			
			<a href="Contact.html">
				<img src="Contact Button Box.png" alt="Contact Button" width="125" height="50" border="0">
			</a>
				
		</div>

	</div>
		
</header>


<body>	
	
	<div class = "MainBox">
	
		<div class = "NewsBanner">
			<img src="HomePageNewsBanner.png" alt="Homepage News Banner">
		</div>

		<div class = "AdvertiseBox">
			<img src="HomePageAdvertise.png" alt="Advertise Box">
		</div>
		
		<div class = "SmallBox1">
			<img src="SmallBoxWhoAmI.png" alt="Small Box 1">
		</div>
		
		<div class = "SmallBox2">
			<img src="HomePageSmallBox.png" alt="Small Box 2">
		</div>
		
		<div class = "SmallBox3">
			<img src="HomePageSmallBox.png" alt="Small Box 3">
		</div>
		
		<div class = "ProjectsBanner">
			<img src="HomePageProjectsBanner.png" alt="Homepage Projects Banner">
		</div>
		
		<div class = "ProjectBar">
			<img src="ProjectBar.png" alt="Homepage Projects Bar">
		</div>
		
		<div class = "ProjectBox1">
			<img src="ProjectBox.png" alt="Homepage Projects Box 1">
		</div>
		
		<div class = "ProjectBox2">
			<img src="ProjectBox.png" alt="Homepage Projects Box 2">
		</div>
		
		<div class = "ProjectBox3">
			<img src="ProjectBox.png" alt="Homepage Projects Box 3">
		</div>
		
		<div class = "ProjectBox4">
			<img src="ProjectBox.png" alt="Homepage Projects Box 4">
		</div>
		
	</div>	
	
</body>

	<footer>
		Jackie
		
		<?php
			$con=mysqli_connect("localhost","root","","jackie");

			// Check connection
			if (mysqli_connect_errno($con))
			{
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
			
			$visit = mysqli_query($con,"SELECT visit_count FROM total_visit");
			mysqli_query($con,"UPDATE `jackie`.`total_visit` SET visit_count = visit_count + 1");
			
			while($row = mysqli_fetch_array($visit))
			{
				echo $row['visit_count'];
			}
		?>
	

	</footer>

</html>