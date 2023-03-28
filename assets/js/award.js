const sec3_1 = new Vue({
    el: '#aigo',
    data: {
        award_category : "AIGO",
        awards: [{
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「利用情感語意分析建構商家網路評價機制」-佳作',
                simple_text: ['全新評論的評分機制',
                              '設計一套清洗濫充評論流程'],
            },
            {
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「原住民語音生成」-特優',
                simple_text: ['Design an aborigines Text to Speech (TTS)',
                	           'Use Tacotron and Tacotron2 as the TTS.' , 
                	           'Log-Spectral Distance is less than 15']
            },
        ]
    }
})

const sec3_2 = new Vue({
    el: '#hackathon',
    data: {
        award_category : "HACKATHON",
        awards: [{
                title: '法律法遵黑客松-法遵特別獎',
                simple_text: ['爬取法規與相關案件',
                            'Hierarchical Attention Networks for MultiLabel Law-Document Classification',
                            ],
            },
            {
                title: '保險金融與AI智慧健康區塊鏈 黑客松競賽-佳作',
                simple_text: ['以台北醫學大學提供之資料',
                            "完成一套ICU病床分配系統"]
            },
        ]
    }
})

const sec3_3 = new Vue({
    el: '#hackathon',
    data: {
        award_category : "AICUP",
        awards: [{
                title: '法律法遵黑客松-法遵特別獎',
                simple_text: ['爬取法規與相關案件',
                            'Hierarchical Attention Networks for MultiLabel Law-Document Classification',
                            ],
            },
            {
                title: '保險金融與AI智慧健康區塊鏈 黑客松競賽-佳作',
                simple_text: ['以台北醫學大學提供之資料',
                            "完成一套ICU病床分配系統"]
            },
        ]
    }
})