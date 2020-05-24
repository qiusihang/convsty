import csv
import sklearn.preprocessing
import random
import matplotlib.pyplot as plt
from sklearn import tree, naive_bayes, neighbors
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression

def performance(Y1,Y2):
    results = {}
    tp = 0
    fp = 0
    fn = 0
    tn = 0
    for i in range(len(Y1)):
        if Y1[i] == 1 and Y2[i] == 1: tp += 1
        if Y1[i] == 0 and Y2[i] == 1: fp += 1
        if Y1[i] == 1 and Y2[i] == 0: fn += 1
        if Y1[i] == 0 and Y2[i] == 0: tn += 1
    results['precision_i'] = 0 if tp+fp==0 else tp / (tp+fp)
    results['recall_i'] = 0 if tp+fn==0 else tp / (tp+fn)
    results['f1_i'] = 0 if tp==0 else results['precision_i'] * results['recall_i'] * 2 / (results['precision_i'] + results['recall_i'])
    results['precision_c'] = 0 if tn+fn==0 else tn / (tn+fn)
    results['recall_c'] = 0 if tn+fp==0 else tn / (tn+fp)
    results['f1_c'] = 0 if tn==0 else results['precision_c'] * results['recall_c'] * 2 / (results['precision_c'] + results['recall_c'])
    results['accuracy'] = (tp+tn) / (tp+fp+fn+tn)
    return results

def readgt(filename):
    csvFile = open(filename)
    reader = csv.reader(csvFile)
    result = {}
    for line in reader:
        if reader.line_num == 1:
            continue
        result[line[0]] = int(int(line[1])>0)
    csvFile.close()
    return result

def readfeatures(filename):
    csvFile = open(filename)
    reader = csv.reader(csvFile)
    result = []
    for line in reader:
        if reader.line_num == 1:
            continue
        result.append([line[0]]+[float(i) for i in line[1:]])
    csvFile.close()
    return result


if __name__ == "__main__":

    X = []
    Y = []

    gt = readgt("data/prediction/gt.csv")
    features = readfeatures("data/prediction/features_rich.csv")
    # features = readfeatures("analysis/features_limited.csv")

    for f in features:
        groundtruth = gt[f[0]]
        X.append(f[1:])
        Y.append(groundtruth)

    X_orignial = X
    X,n = sklearn.preprocessing.normalize(X,axis=0,norm='max',return_norm=True)

    random.seed(0)
    testing_set = random.sample(range(180),int(180*0.3))

    train_x = []
    train_y = []
    test_x = []
    test_y = []

    for i in range(180):
        if i in testing_set:
            test_x.append(X[i])
            test_y.append(Y[i])
        else:
            train_x.append(X[i])
            train_y.append(Y[i])


    clfs = {\
            'Logistic Regression': LogisticRegression(penalty='l2'),\
            'Gaussian Naive Bayes': naive_bayes.GaussianNB(), \
            'naive_mul':naive_bayes.MultinomialNB(),\
            'Bernoulli':naive_bayes.BernoulliNB(),\
            'k-NN' : neighbors.KNeighborsClassifier(),\
            'Decision Tree':tree.DecisionTreeClassifier(),\
            'Gradient Boosting' : GradientBoostingClassifier(n_estimators=100, learning_rate=1.0,max_depth=1, random_state=0)
    }

    labels = ["accuracy","precision_i","recall_i","f1_i","precision_c","recall_c","f1_c"]

    def try_different_method(clf):
        clf.fit(train_x,train_y)
        res = clf.predict(test_x)
        p = performance(test_y,res.tolist())
        for i in range(len(labels)):
            print(labels[i],":",p[labels[i]]*100)

    for clf_key in clfs.keys():
        print(clf_key+":")
        clf = clfs[clf_key]
        try_different_method(clf)
        print()

    #
    # plt.figure(figsize=(20,10))
    # sklearn.tree.plot_tree(clfs["Decision Tree"],filled=True,class_names=["Involvement","Considerateness"],feature_names=["pp","rep","pse","rtype","pause","tt","nint","wpu","wps","nque","nexcl"])
    # plt.savefig("data/prediction/tree.pdf",bbox_inches='tight')
