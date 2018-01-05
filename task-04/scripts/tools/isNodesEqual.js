function isNodesEqual(A, B) {
    if (A.length !== B.length) {
        return false;
    }

    for (let i = 0; i < A.length; i++) {
        if (!A[i].isEqualNode(B[i])) {
            return false;
        }
    }

    return true;
}

export { isNodesEqual };
