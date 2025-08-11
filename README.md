## Routes chats.js 
<br/>

#### GET /thread  -> return all threads -> and we will sort on basis of updatedAt 
#### GET /thread/:threadId -> for getting a particular Thread message using its uniuqe id  -> for one specific thread it will return all message of that thread 
#### DELETE /thread/:threadId -> delete individual thread 
#### POST /chat -> message goes to backend will go to API for getting response (message+reply) pair
