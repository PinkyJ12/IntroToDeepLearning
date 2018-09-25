### Common Dimensionality Reduction Techniques
Dimensionality reduction can be done in two different ways:

* By only keeping the most relevant variables from the original dataset (this technique is called feature selection)
* By finding a smaller set of new variables, each being a combination of the input variables, containing basically the same information as the input variables (this technique is called dimensionality reduction)

We will now look at various dimensionality reduction techniques and how to implement each of them in Python.

### Brief Summary of when to use each Dimensionality Reduction Technique
In this section, we will briefly summarize the use cases of each dimensionality reduction technique that we covered. It’s important to understand where you can, and should, use a certain technique as it helps save time, effort and computational power.

![Image](/Users/pinkyjohar/Desktop/Screen Shot 2018-08-28 at 11.47.26 PM.png)

 
**Missing Value Ratio:** If the dataset has too many missing values, we use this approach to reduce the number of variables. We can drop the variables having a large number of missing values in them

**Low Variance filter:** We apply this approach to identify and drop constant variables from the dataset. The target variable is not unduly affected by variables with low variance, and hence these variables can be safely dropped

**High Correlation filter:** A pair of variables having high correlation increases multicollinearity in the dataset. So, we can use this technique to find highly correlated features and drop them accordingly

**Random Forest:** This is one of the most commonly used techniques which tells us the importance of each feature present in the dataset. We can find the importance of each feature and keep the top most features, resulting in dimensionality reduction

Both **Backward Feature Elimination** and **Forward Feature Selection** techniques take a lot of computational time and are thus generally used on smaller datasets

**Factor Analysis:** This technique is best suited for situations where we have highly correlated set of variables. It divides the variables based on their correlation into different groups, and represents each group with a factor

**Principal Component Analysis:** This is one of the most widely used techniques for dealing with linear data. It divides the data into a set of components which try to explain as much variance as possible

**Independent Component Analysis:** We can use ICA to transform the data into independent components which describe the data using less number of components

**ISOMAP:** We use this technique when the data is strongly non-linear

**t-SNE:** This technique also works well when the data is strongly non-linear. It works extremely well for visualizations as well

**UMAP:** This technique works well for high dimensional data. Its run-time is shorter as compared to t-SNE
