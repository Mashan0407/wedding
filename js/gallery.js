            // Array of image data

            var imageData = new Array(17)

            createTwoDimensionalArray(3);

            // Image path data

            imageData[0][0] = "photo/image1.jpg";

            imageData[1][0] = "photo/image2.jpg";

            imageData[2][0] = "photo/image3.jpg";

            imageData[3][0] = "photo/image4.jpg";

            imageData[4][0] = "photo/image5.jpg";

            imageData[5][0] = "photo/image6.jpg";

            imageData[6][0] = "photo/image7.jpg";

            imageData[7][0] = "photo/image8.jpg";

            imageData[8][0] = "photo/image9.jpg";

            imageData[9][0] = "photo/image10.jpg";

            imageData[10][0] = "photo/image11.jpg";

            imageData[11][0] = "photo/image12.jpg";

            imageData[12][0] = "photo/image13.jpg";

            imageData[13][0] = "photo/image14.jpg";

            imageData[14][0] = "photo/image15.jpg";

            imageData[15][0] = "photo/image16.jpg";

            imageData[16][0] = "photo/image17.jpg";


            // Image title data

            imageData[0][1] = "Family";

            imageData[1][1] = "Bridesmaids";

            imageData[2][1] = "Groomsman";

            imageData[3][1] = "First steps";

            imageData[4][1] = "Love";

            imageData[5][1] = "Sunshine Wonderland";

            imageData[6][1] = "Fun time";

            imageData[7][1] = "Sweet Relatives";

            imageData[8][1] = "Girls ...";

            imageData[9][1] = "Juping to the sky";

            imageData[10][1] = "Beautiful people";

            imageData[11][1] = "Fairy tale";

            imageData[12][1] = "Bride";

            imageData[13][1] = "Morning coffee";

            imageData[14][1] = "Flowers";

            imageData[15][1] = "Happiness";

            imageData[16][1] = "To be continued ...";



            // Image description data

            imageData[0][2] = "Ready to creat a new family...";

            imageData[1][2] = "The best girls I have ever met!!!";

            imageData[2][2] = "We could film our own \"Hangover\" movie";

            imageData[3][2] = "Our first steps as a Fmily";

            imageData[4][2] = "Love is ...";

            imageData[5][2] = "Swimming in sunlight";

            imageData[6][2] = "Let's the party begin ";

            imageData[7][2] = "People - always ready to help";

            imageData[8][2] = "Girles ...";

            imageData[9][2] = "Jumping time";
            
            imageData[10][2] = "Team ";

            imageData[11][2] = "Every girl should have her own Fairy tale";

            imageData[12][2] = "From this moment begins a new story";

            imageData[13][2] = "Last preparations";

            imageData[14][2] = "Wonderful bridal bouquet";

            imageData[15][2] = "We are creators of our happiness";

            imageData[16][2] = "...";


            // Our index, boundry and scroll tracking variables

            var imageIndexFirst = 0;

            var imageIndexLast = 3;

            var continueScroll = 0;

            var maxIndex = 16;

            var minIndex = 0;


            // This function creates our two dimensional array

            function createTwoDimensionalArray(arraySize) {

                for (i = 0; i < imageData.length; ++i)

                    imageData[i] = new Array(arraySize);
            }


            // This function preloads the thumbnail images

            function preloadThumbnails() {

                imageObject = new Image();

                for (i = 0; i < imageData.length; ++i)

                    imageObject.src = imageData[i][0];
            }

            // This function changes the text of a table cell

            function changeCellText(cellId, myCellData) {

                document.getElementById(cellId).innerHTML = myCellData;

            }

            // This function changes the images

            function changeImage(ImageToChange, MyimageData) {

                document.getElementById(ImageToChange).setAttribute('src', MyimageData)
            }


            // This function changes the image alternate text

            function changeImageAlt(ImageToChange, imageData) {

                document.getElementById(ImageToChange).setAttribute('alt', imageData)
            }


            // This function changes the image alternate text

            function changeImageTitle(ImageToChange, imageData) {

                document.getElementById(ImageToChange).setAttribute('title', imageData)
            }


            // This function changes the image onmouseover

            function changeImageOnMouseOver(ImageToChange, imageIndex) {

                document.getElementById(ImageToChange).setAttribute('onmouseover', 'handleThumbOnMouseOver(' + imageIndex + ');')
            }


            // This function hanles calling on change function

            // for a thumbnail onmouseover event

            function handleThumbOnMouseOver(imageIndex) {

                changeImage('imageLarge', imageData[imageIndex][0]);

                changeCellText('imageTitleCell', imageData[imageIndex][1]);

                changeCellText('imageDescriptionCell', imageData[imageIndex][2]);

                changeImageAlt('imageLarge', imageData[imageIndex][1] + ' - ' + imageData[imageIndex][2]);

                changeImageTitle('imageLarge', imageData[imageIndex][1] + ' - ' + imageData[imageIndex][2]);
            }


            // This function handles the scrolling in both directions

            function scrollImages(scrollDirection) {

                // We need a variable for holding our working index value

                var currentIndex;

                // Determine which direction to scroll - default is down (left)

                if (scrollDirection == 'up')

                {

                    // Only do work if we are not to the last image

                    if (imageIndexLast != maxIndex)

                    {

                        // We set the color to black for both before we begin

                        // If we reach the end during the process we'll change the "button" color to silver

                        document.getElementById('scrollPreviousCell').setAttribute('style', 'color: Black')

                        document.getElementById('scrollNextCell').setAttribute('style', 'color: Black')

                        // Move our tracking indexes up one

                        imageIndexLast = imageIndexLast + 1;

                        imageIndexFirst = imageIndexFirst + 1;

                        //  Change next "button" to silver if we are at the end

                        if (imageIndexLast == maxIndex)

                        {

                            document.getElementById('scrollNextCell').setAttribute('style', 'color: Silver')

                        }

                        // Changescrollbar images in a set delay sequence to give a pseudo-animated effect

                        currentIndex = imageIndexLast;

                        changeImage('scrollThumb4', imageData[currentIndex][0]);

                        changeImageOnMouseOver('scrollThumb4', currentIndex);

                        currentIndex = imageIndexLast - 1;

                        setTimeout("changeImage('scrollThumb3',imageData[" + currentIndex + "][0])", 25);

                        setTimeout("changeImageOnMouseOver('scrollThumb3'," + currentIndex + ")", 25);

                        currentIndex = imageIndexLast - 2;

                        setTimeout("changeImage('scrollThumb2',imageData[" + currentIndex + "][0])", 50);

                        setTimeout("changeImageOnMouseOver('scrollThumb2'," + currentIndex + ")", 50);

                        currentIndex = imageIndexLast - 3;

                        setTimeout("changeImage('scrollThumb1',imageData[" + currentIndex + "][0])", 75);

                        setTimeout("changeImageOnMouseOver('scrollThumb1'," + currentIndex + ")", 75);

                        // Wait and check to see if user is still hovering over button

                        // This pause gives the user a chance to move away from the button and stop scrolling

                        setTimeout("scrollAgain('" + scrollDirection + "')", 1000);

                    }

                } else

                {

                    // Only do work if we are not to the first image

                    if (imageIndexFirst != minIndex)

                    {

                        // We set the color to black for both before we begin

                        // If we reach the end during the process we'll change the "button" color to silver

                        document.getElementById('scrollPreviousCell').setAttribute('style', 'color: Black')

                        document.getElementById('scrollNextCell').setAttribute('style', 'color: Black')

                        // Move our tracking indexes down one

                        imageIndexLast = imageIndexLast - 1;

                        imageIndexFirst = imageIndexFirst - 1;

                        //  Change previous "button" to silver if we are at the beginning

                        if (imageIndexFirst == minIndex)

                        {

                            document.getElementById('scrollPreviousCell').setAttribute('style', 'color: Silver')

                        }

                        // Change scrollbar images in a set delay sequence to give a pseudo-animated effect

                        currentIndex = imageIndexFirst;

                        changeImage('scrollThumb1', imageData[currentIndex][0]);

                        changeImageOnMouseOver('scrollThumb1', currentIndex);

                        currentIndex = imageIndexFirst + 1;

                        setTimeout("changeImage('scrollThumb2',imageData[" + currentIndex + "][0])", 25);

                        setTimeout("changeImageOnMouseOver('scrollThumb2'," + currentIndex + ")", 25);

                        currentIndex = imageIndexFirst + 2;

                        setTimeout("changeImage('scrollThumb3',imageData[" + currentIndex + "][0])", 50);

                        setTimeout("changeImageOnMouseOver('scrollThumb3'," + currentIndex + ")", 50);

                        currentIndex = imageIndexFirst + 3;

                        setTimeout("changeImage('scrollThumb4',imageData[" + currentIndex + "][0])", 75);

                        setTimeout("changeImageOnMouseOver('scrollThumb4'," + currentIndex + ")", 75);

                        // Wait and check to see if user is still hovering over button

                        // This pause gives the user a chance to move away from the button and stop scrolling

                        setTimeout("scrollAgain('" + scrollDirection + "')", 1000);

                    }
                }
            }


            // This function determines whether or not to keep scrolling

            function scrollAgain(scrollDirection)

            {
                if (continueScroll == 1) {
                    scrollImages(scrollDirection);
                }
            }

            // This function kicks off scrolling down (left)

            function scrollPrevious() {
                continueScroll = 1;

                scrollImages('down');
            }

            // This function kicks off scrolling up (right)

            function scrollNext() {

                continueScroll = 1;

                scrollImages('up');

            }


            // This function stops the scrolling action

            function scrollStop() {

                continueScroll = 0;

            }