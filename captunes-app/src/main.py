import pymongo
import random
from pydub import AudioSegment
from pydub.playback import play
import io
from flask import Flask, render_template, session
import json


upperrangeseq = 5
lowerrangeseq = 2

client = pymongo.MongoClient("mongodb://localhost:27017/")

#The database
database = client["newhacks"]

#The collection of sounds 
collection = database["sounds"]

#The function to send the mp3 file to the mongoDB
def store_mp3(file_path, numid):
    #Open file given in file path and read the mp3 data as text
    with open(file_path, 'rb') as file:
        mp3_data = file.read()  
    #The document data
    document = {
        "sound": (file_path.split('/')[-1]).split('.')[0],
        "data": mp3_data,  
        "numid": numid  
    }

    result = collection.insert_one(document)


# store_mp3("sounds/guitar.mp3", 1)
# store_mp3("sounds/harp.mp3", 2)
# store_mp3("sounds/piano.mp3", 3)
# store_mp3("sounds/saxophone.mp3", 4)
# store_mp3("sounds/trumpet.mp3", 5)



def retrieve_mp3(numid, output_path):
    # Find the document by its ID
    document = collection.find_one({"numid": numid})

    print(output_path)
    with open(output_path, 'wb') as file:
        file.write(document['data'])


lengthofsequence = random.randint(lowerrangeseq,upperrangeseq)

amountofdata = collection.count_documents({})

# # for collection in database.list_collection_names():
# #     collection = database["sounds"]
# #     collection.delete_many({})


# all_documents_list = list(collection.find())

# Write to a JSON file
# with open('output.json', 'w') as outfile:
#     json.dump(all_documents_list, outfile, default=str) 


idofseq = []
wrongidseq1 = []
wrongidseq2 = []
wrongidseq3 = []
for x in range(lengthofsequence-1):
    idofseq.append(random.randint(1,amountofdata))
    wrongidseq1.append(random.randint(1,amountofdata))
    wrongidseq2.append(random.randint(1,amountofdata))
    wrongidseq3.append(random.randint(1,amountofdata))

count1 = 0
count2 = 0
count3 = 0
count4 = 0

for x in idofseq:
    document = collection.find_one({"numid": x})
        retrieve_mp3(x, f"../public/correctsounds/correct{count1}.mp3")
        count1 += 1

for x in wrongidseq1:
    document = collection.find_one({"numid": x})
    retrieve_mp3(x, f"../public/incorrectsounds1/incorrect{count2}.mp3")
    count2 += 1 
        
        
for x in wrongidseq2:
    document = collection.find_one({"numid": x})
    retrieve_mp3(x, f"../public/incorrectsounds2/incorrect{count3}.mp3")
    count3 += 1
        
for x in wrongidseq3:
    document = collection.find_one({"numid": x})
    retrieve_mp3(x, f"../public/incorrectsounds3/incorrect{count4}.mp3")
    count4 += 1
        
        
@app.route("/submit/<usrans>")
def submit(usrans):
    if usrans == session.get('idofseq', 'no value set'):






# if __name__ == "__main__":
#     app.run(debug=True)





