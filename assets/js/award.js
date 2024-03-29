const sec3_1 = new Vue({
    el: '#aigo',
    data: {
        award_category: "AIGO",
        awards: [{
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「利用情感語意分析建構商家網路評價機制」-佳作',
                simple_text: ['全新商家評論的評分機制',
                    '提供一套可行 POC 方案，有效過濾濫充評論'
                ],
                date: 'Dec 2022',
                image: "images/awards/store_review.jpg"
                // link : "https://github.com/AI-FREE-Team/TTS-AIGO"
            },
            {
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「原住民語音生成」-特優',
                simple_text: ['開發原住民文字轉語音',
                    'Tacotron and Tacotron2 作為模型架構並比較',
                    'Log-Spectral Distance 小於 15'
                ],
                date: 'Oct 2021',
                image: "images/awards/aborigines.jpg"
            },
        ]
    }
})

const sec3_2 = new Vue({
    el: '#hackathon',
    data: {
        award_category: "HACKATHON",
        awards: [{
                title: '法律法遵黑客松-法遵特別獎',
                simple_text: ['以代理法遵完成案件法規多標籤分類',
                    '設計分層式注意力模型達到可解釋性 AI'
                ],
                date: 'Aug 2021',
                image: "images/awards/law_tech.jpg"
            },
            {
                title: '保險金融與AI智慧健康區塊鏈 黑客松競賽-佳作',
                simple_text: ['以台北醫學大學提供之資料',
                    "開發一套ICU病床分配系統"
                ],
                date: 'July 2019',
                image: "images/awards/medical_hackthon.jpg"
            },
        ]
    }
})

const sec3_3 = new Vue({
    el: '#aicup',
    data: {
        award_category: "AICUP",
        awards: [{
                title: '醫病訊息決策與對話語料分析競賽 秋季賽：醫病資料去識別化-前標 (Ranking : 21/469)',
                simple_text: ['去識別醫生與病人的談話之間的隱私欄位',
                    '基於 Sentence piece RoBERta 作為模型結合 CRF 進行微調',
                    '使用正規表示法改善隱私欄位歧異現象',
                ],
                date: 'Dec 2020',
                image: "images/awards/medical_did.jpg"
            },
            {
                title: '人工智慧論文機器閱讀競賽之論文標註-前標 (Ranking : 33/531)',
                simple_text: ['給定 Computer Science 相關的論文摘要，對每個句子進行分類(Background、Objectives、Methods、Results、Conclusions、Others)',
                    "同時使用 Glove & BERT 作為 word embedding",
                    "比較 GRU 與 LSTM 作為 neural networks 效能差異"
                ],
                date: 'Dec 2019',
                image: "images/awards/paper_anno.jpg"
            },
        ]
    }
})

const sec3_4 = new Vue({
    el: '#other',
    data: {
        award_category: "OTHERS",
        awards: [{
                title: 'Hahow-上架線上課程「學習AI一把抓：點亮人工智慧技能樹」',
                simple_text: ['Python Online IDE 操作',
                    '資料分析與特徵工程',
                    '機器學習與類神經網路教學'
                ],
                date: 'Apr 2022',
                image: "images/awards/hahow.jpg"
            },
            {
                title: 'Intel OpenVINO™ x Edge AI創意應用競賽-佳作',
                simple_text: ['使用 OpenVINO toolkit 完成 Object Detection'],
                date: 'Nov 2019',
                image: "images/awards/openvino.jpg"
            },
            {
                title: '2018全國大專院校羽球比賽大電盃-冠軍',
                simple_text: [''],
                date: 'Nov 2018',
                image: "images/awards/badminton.jpg"
            },
        ]
    }
})

const journal = new Vue({
    el: '#journal',
    data: {
        papers: [{
                title: 'Principle-Based Approach for the De-Identification of Code-Mixed Electronic Health Records',
                comment: 'IEEE Access (SCI)',
                date: 'Mar 2022',
            },
            {
                title: 'Cancer registry coding via hybrid neural symbolic systems in the cross-hospital setting',
                comment: 'IEEE Access (SCI)',
                date: 'July 2021',
            },
            {
                title: 'Deep Learning-Based Natural Language Processing for Screening Psychiatric Patients',
                comment: 'Front Psychiatry (SCI)',
                date: 'Jan 2021',
            },
            {
                title: 'Family history information extraction with neural attention and an enhanced relation-side scheme: algorithm development and validation',
                comment: 'JMIR Medical Informatics (SCI)',
                date: 'Dec 2020',
            },
        ]
    }
})

const conference = new Vue({
    el: '#conference',
    data: {
        papers: [{
                title: '多語言模型於語碼混合資料上的效能探討以臺灣電子健康紀錄為例',
                comment: '第二十屆離島資訊技術與應用研討會',
                date: 'May 2022',
            },
            {
                title: 'Data Augmentation for BERT in the Medication Extraction Task of BioCreative VII',
                comment: 'Proceedings of the BioCreative VII Challenge Evaluation Workshop',
                date: 'Nov 2021',
            },
            {
                title: 'Deep Learning-Based Natural Language Processing for Screening Psychiatric Patients',
                comment: 'MEDINFO 2021',
                date: 'Oct 2021',
            },
        ]
    }
})