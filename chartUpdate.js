const response =  await fetch('/api', options)
    const post = await response.json()
    console.log(post)
    const postArray = Array.from(post)
    chart.data.labels = []
    chart.data.datasets[0].data = []
    postArray.forEach(post => {
        chart.data.labels.push(post.xAxis)
        chart.data.datasets[0].data.push(post.mean)
        if(options.body.idRqst[0] != options.body.idRqst[1]) 
            {chart.data.datasets[1].data.push(post.min)
            chart.data.datasets[2].data.push(post.max)}
    })
