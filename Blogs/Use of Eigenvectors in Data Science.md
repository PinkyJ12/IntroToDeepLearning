### TSNE Explained:    
https://www.analyticsvidhya.com/blog/2017/01/t-sne-implementation-r-python/

## Eigenvalues and Eigenvectors
Eigenvectors find a lot of applications in different domains like computer vision, physics and machine learning. If you have studied machine learning and are familiar with Principal component analysis algorithm, you must know how important the algorithm is when handling a large data set. Have you ever wondered what is going on behind that algorithm? Actually, the concept of Eigenvectors is the backbone of this algorithm. Let us explore Eigen vectors and Eigen values for a better understanding of it.

Let’s multiply a 2-dimensional vector with a 2*2 matrix and see what happens.



This operation on a vector is called linear transformation.  Notice that the directions of input and output vectors are different. Note that the column matrix denotes a vector here.

I will illustrate my point with the help of a picture as shown below.

![Image](/Users/pinkyjohar/Desktop/Screen Shot 2018-08-28 at 11.13.28 PM.png)

 

In the above picture, there are two types of vectors coloured in red and yellow and the picture is showing the change in vectors after a linear transformation. Note that on applying a linear transformation to yellow coloured vector, its direction changes but the direction of the red coloured vector doesn’t change even after applying the linear transformation. The vector coloured in red is an example of Eigenvector.

Precisely, for a particular matrix; vectors whose direction remains unchanged even after applying linear transformation with the matrix are called Eigenvectors for that particular matrix. Remember that the concept of Eigen values and vectors is applicable to square matrices only. Another thing to know is that I have taken a case of two-dimensional vectors but the concept of Eigenvectors is applicable to a space of any number of dimensions.

 

#### How to find Eigenvectors of a matrix?
Suppose we have a matrix A and an Eigenvector ‘x’ corresponding to the matrix. As explained already, after multiplication with matrix the direction of ‘x’ doesn’t change. Only change in magnitude is permitted. Let us write it as an equation-

Ax = cx

(A-c)x = 0  …….(1)

Please note that in the term (A-c), ‘c’ denotes an identity matrix of the order equal to ‘A’ multiplied by a scalar ‘c’

We have two unknowns ‘c’ and ‘x’ and only one equation. Can you think of a trick to solve this equation?

In equation (1), if we put the vector ‘x’ as zero vector, it makes no sense. Hence, the only choice is that (A-c) is a singular matrix. And singular matrix has a property that its determinant equals to 0. We will use this property to find the value of ‘c’.

Det(A-c) = 0

Once you find the determinant of the matrix (A-c) and equate to 0, you will get an equation in ‘c’ of the order depending upon the given matrix A. all you have to do is to find the solution of the equation. Suppose that we find solutions as ‘c1’ , ‘c2’ and so on. Put ‘c1’ in equation (1) and find the vector ‘x1’ corresponding to ‘c1’. The vector ‘x1’ that you just found is an Eigenvector of A. Now, repeat the same procedure with ‘c2’, ‘c3’ and so on.

####Code for finding EigenVectors in python

```python
import  numpy as np

#create an array
arr = np.arange(1,10).reshape(3,3)

#finding the Eigenvalue and Eigenvectors of arr
np.linalg.eig(arr)
```


### Use of Eigenvectors in Data Science
The concept of Eigenvectors is applied in a machine learning algorithm Principal Component Analysis. Suppose you have a data with a large number of features i.e. it has a very high dimensionality. It is possible that there are redundant features in that data. Apart from this, a large number of features will cause reduced efficiency and more disk space. What PCA does is that it craps some of lesser important features. But how to determine those features? Here, Eigenvectors come to our rescue.Let’s go through the algorithm of PCA. Suppose we have an ‘n’ dimensional data and we want to reduce it to ‘k’ dimensions. We will do it in steps.

Step 1: Data is mean normalised and feature scaled.

Step 2: We find out the covariance matrix of our data set.

Now we want to reduce the number of features i.e. dimensions. But cutting off features means loss of information. We want to minimise the loss of information i.e. we want to keep the maximum variance. So, we want to find out the directions in which variance is maximum. We will find these directions in the next step.

Step 3: We find out the Eigenvectors of the covariance matrix. You don’t need to bother much about covariance matrix. It’s an advanced concept of statistics.  As we have data in ‘n’ dimensions, we will find ‘n’ Eigenvectors corresponding to ‘n’ Eigenvalues.

Step 4: We will select ‘k’ Eigenvectors corresponding to the ‘k’ largest Eigenvalues and will form a matrix in which each Eigenvector will constitute a column. We will call this matrix as U.

Now it’s the time to find the reduced data points. Suppose you want to reduce a data point ‘a’ in the data set to ‘k’ dimensions.  To do so, you have to just transpose the matrix U and multiply it with the vector ‘a’. You will get the required vector in ‘k’ dimensions.

Once we are done with Eigenvectors, let’s talk about another advanced and highly useful concept in Linear algebra called Singular value decomposition, popularly called as SVD. Its complete understanding needs  a rigorous study of linear algebra.  In fact, SVD is a complete blog in itself. We will come up with another blog completely devoted to SVD. Stay tuned for a better experience. For now, I will just give you a glimpse of how SVD helps in data science.

 

### Singular Value Decomposition
Suppose you are given a feature matrix A. As suggested by name, what we do is we decompose our matrix A in three constituent matrices for a special purpose.  Sometimes, it is also said that svd is some sort of generalisation of Eigen value decomposition.  I will not go into its mathematics for the reason already explained and will stick to our plan i.e. use of svd in data science.

Svd is used to remove the redundant features in a data set. Suppose you have a data set which comprises of 1000 features. Definitely, any real data set with such a large number of features is bound to contain redundant features. if you have run ML, you should be familiar with the fact that Redundant features cause a lots of problems in running machine learning algorithms. Also, running an algorithm on the original data set will be time inefficient and will require a lot of memory. So, what should you to do handle such a problem? Do we have a choice?  Can we omit some features? Will it lead to significant amount of information loss? Will we be able to get an efficient enough algorithm even after omitting the rows? I will answer these questions with the help of an illustration.

Look at the pictures shown below 
![Image](/Users/pinkyjohar/Desktop/Screen Shot 2018-08-28 at 11.20.21 PM.png)



We can convert this tiger into black and white and can think of it as a matrix whose elements represent the pixel intensity as relevant location. In simpler words, the matrix contains information about the intensity of pixels of the image in the form of rows and columns. But, is it necessary to have all the columns in the intensity matrix? Will we be able to represent the tiger with a lesser amount of information? The next picture will clarify my point. In this picture, different images are shown corresponding to different ranks with different resolution. For now, just assume that higher rank implies the larger amount of information about pixel intensity. 
![Image](/Users/pinkyjohar/Desktop/Screen Shot 2018-08-28 at 11.20.29 PM.png)


It is clear that we can reach to a pretty well image with 20 or 30 ranks instead of 100 or 200 ranks and that’s what we want to do in a case of highly redundant data. What I want to convey is that to get a reasonable hypothesis, we don’t have to retain all the information present in the original dataset. Even, some of the features cause a problem in reaching a solution to the best algorithm. For the example, presence of redundant features causes multi co-linearity in linear regression. Also, some features are not significant for our model. Omitting these features helps to find a better fit of algorithm along with time efficiency and lesser disk space. Singular value decomposition is used to get rid of the redundant features present in our data.