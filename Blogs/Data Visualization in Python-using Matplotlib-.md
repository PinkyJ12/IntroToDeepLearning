# Data Visualization in Python-using Matplotlib:
Matplotlib is the most popular data visualization library in Python. It allows us to create figures and plots, and makes it very easy to produce static raster or vector files without the need for any GUIs.

My this project is to find the richest country in the world on the per person basis in the sample [dataset](IntroToDeepLearning/SupervisedLeaning/VisualistionUsingMatplotlib/nations.csv)

Here,for simplicity, I compared different country’s gdp per capita to try to answer this question following the steps below :

* First,imported all necessary packages.
* Then loaded the dataset.
* Cleaned the dataset by filling in missing values.
* Aggregated values using .groupby().
* Sorted the values.
* Represented the data in line and bar plot.

Replace the missing values in 'gdp_percap' column with the median. Its always good idea to replace the values with median when there are outliers in the column.
Then calculate the mean of **Gross Domestic Product per capita** grouping them by country for all available years. After saving this value to a new variable I sorted the countries according to their gdp_percap and displayed 6 countries with the highest gdp_percap further saving this data in a new variable.

I noticed that **‘United Arab Emirates’** has the highest average gdp_percap. Having this information, I looked at ‘UAE’ in more details to find out if it’s actually the most richest country in the world on a per-person basis. This is done by plotting how the gdp_percap in ‘UAE’ has changed over time. Below is the plot showing value of GDP/capita for various years.

![Fig 1](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/GDP:Capita%20as%20per%20country.png)


As seen above, the line plot didnt gave me a good representation that I could make meaning from, so I visualized it in a barplot to get a better understanding of the data where I found the decrease in GDP from 2007 onwards. 

![Fig 2](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/GDP:Capita%20as%20per%20country-bar%20graph.png) 

Since gdp per capita is gdp per person, I plotted UAE's gdp_percap, gdp and population on the same graph using the .subplot() function.
![Fig 3](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/GDP:Capita%2CGDP%2CPopulation-line1%20graph.png)

For a clearer result, I plotted it’s bar graph too

![Fig 4](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/GDP:Capita%2CGDP%2CPopulation-bar%20graph.png)
From the above plots, it was clear that inspite of increase in GDP, there was decrease in GDP per capita as there was increase in population too.


To tell how much faster their population grew relative to their gdp? I tried and compared their relative growth in a single plot by showing the population growth in the first year. I set the first year’s population to 100 as the basis of comparison, then repeat the same for gdp and gdp_percap

![Fig 5](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/GDP:Capita%2CGDP%2CPopulation-line%20graph.png)

Its representation in a bar plot for clearer view.


![Fig 6](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/GDP%20and%20population%20growth-firstyear-bar%20graph.png)


As it can be seen, at no point did UAE's gdp ever catch up with the population growth.

To really answer this question, I went ahead and compare UAE's gdp_percap with that of another country in the top_five_countries . Here are the plots of gdp per capita growth in UAE w.r.t other countries on the same chart.

![Fig 7](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/GDP:capita%20comparison%20b:w%20UAE%20and%20China.png)

![Fig 8](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/Gdp:capita%20comparison%20b:w%20UAE%20and%20Kuwait.png)

![Fig 9](https://github.com/PinkyJ12/IntroToDeepLearning/blob/master/SupervisedLeaning/VisualistionUsingMatplotlib/Charts/Gdp:capita%20comparison%20b:w%20UAE%20and%20Qatar.png)

## Conclusion
As can be seen from above graphs, UAE's gdp/capita has reduced in recent years as compared to other top 5 countries but if we take overall average of all years gdp/capita of UAE is high as compared to other countries.


