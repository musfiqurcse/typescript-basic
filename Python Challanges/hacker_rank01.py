if __name__ == '__main__':
    master_items = []
    first_min = 10e9
    for _ in range(int(input())):
        list_item=[]
        name = input()
        score = float(input())
        first_min=first_min if first_min < score else score
        list_item.append(score)
        list_item.append(name)
        master_items.append(list_item)
    master_items=sorted(master_items)
    second_min=0
    start_item=False
    for item in master_items:
        if item[0]!=first_min and not start_item:
            second_min=item[0]
            start_item=True
            print(item[1])  
        elif start_item and item[0]==second_min:
            print(item[1])
