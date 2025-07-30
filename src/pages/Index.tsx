import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Mock data
  const recentMaterials = [
    { 
      id: 1, 
      title: "Введение в React", 
      type: "PDF", 
      subject: "Программирование", 
      teacher: "Иванов И.И.", 
      date: "15 января", 
      downloads: 124,
      rating: 4.8
    },
    { 
      id: 2, 
      title: "Математический анализ. Лекция 5", 
      type: "PPT", 
      subject: "Математика", 
      teacher: "Петрова А.С.", 
      date: "12 января", 
      downloads: 89,
      rating: 4.6
    },
    { 
      id: 3, 
      title: "История России XIX века", 
      type: "DOCX", 
      subject: "История", 
      teacher: "Сидоров В.П.", 
      date: "10 января", 
      downloads: 67,
      rating: 4.7
    }
  ]

  const subjects = [
    { name: "Программирование", materials: 45, color: "bg-blue-100 text-blue-800" },
    { name: "Математика", materials: 32, color: "bg-green-100 text-green-800" },
    { name: "История", materials: 28, color: "bg-purple-100 text-purple-800" },
    { name: "Физика", materials: 24, color: "bg-orange-100 text-orange-800" },
    { name: "Химия", materials: 19, color: "bg-red-100 text-red-800" },
    { name: "Литература", materials: 15, color: "bg-indigo-100 text-indigo-800" }
  ]

  const teachers = [
    { name: "Иванов И.И.", subject: "Программирование", materials: 12, avatar: "ИИ", rating: 4.9 },
    { name: "Петрова А.С.", subject: "Математика", materials: 18, avatar: "ПА", rating: 4.8 },
    { name: "Сидоров В.П.", subject: "История", materials: 14, avatar: "СВ", rating: 4.7 }
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return 'FileText'
      case 'PPT': return 'Presentation'
      case 'DOCX': return 'FileText'
      case 'VIDEO': return 'Video'
      default: return 'File'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-open-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <h1 className="text-xl font-inter font-semibold text-gray-900">EduShare</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Материалы</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Дисциплины</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Уведомления</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Помощь</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="Bell" size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </Button>
              <Avatar>
                <AvatarFallback className="bg-primary text-white">СИ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">
              Платформа обмена учебными материалами
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Найдите нужные материалы, поделитесь знаниями и учитесь эффективнее вместе с преподавателями и студентами
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск по материалам, дисциплинам, преподавателям..."
                className="pl-12 py-3 text-lg border-2 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Найти
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">156</div>
                <div className="text-sm text-gray-600">Материалов</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-gray-600">Дисциплин</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">28</div>
                <div className="text-sm text-gray-600">Преподавателей</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-1">1.2K</div>
                <div className="text-sm text-gray-600">Студентов</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="materials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="materials">Материалы</TabsTrigger>
            <TabsTrigger value="subjects">Дисциплины</TabsTrigger>
            <TabsTrigger value="teachers">Преподаватели</TabsTrigger>
          </TabsList>

          {/* Materials Tab */}
          <TabsContent value="materials" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-inter font-semibold text-gray-900">Недавние материалы</h3>
              <Button variant="outline">
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить материал
              </Button>
            </div>

            <div className="grid gap-4">
              {recentMaterials.map((material) => (
                <Card key={material.id} className="hover:shadow-lg transition-all duration-200 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon name={getFileIcon(material.type)} size={24} className="text-blue-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{material.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span>{material.teacher}</span>
                            <span>•</span>
                            <span>{material.date}</span>
                            <span>•</span>
                            <span>{material.downloads} скачиваний</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{material.subject}</Badge>
                            <Badge variant="outline">{material.type}</Badge>
                            <div className="flex items-center space-x-1 ml-4">
                              <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                              <span className="text-sm text-gray-600">{material.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Heart" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="MessageCircle" size={16} />
                        </Button>
                        <Button size="sm">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Subjects Tab */}
          <TabsContent value="subjects" className="space-y-6">
            <h3 className="text-xl font-inter font-semibold text-gray-900">Дисциплины</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 animate-scale-in cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{subject.name}</span>
                      <Badge className={subject.color}>{subject.materials}</Badge>
                    </CardTitle>
                    <CardDescription>
                      {subject.materials} материалов доступно
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Progress value={(subject.materials / 50) * 100} className="h-2" />
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Активность</span>
                        <span>{Math.round((subject.materials / 50) * 100)}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers" className="space-y-6">
            <h3 className="text-xl font-inter font-semibold text-gray-900">Преподаватели</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 animate-fade-in">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarFallback className="bg-primary text-white text-lg">
                        {teacher.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h4 className="font-semibold text-gray-900 mb-1">{teacher.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{teacher.subject}</p>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                      <span>{teacher.materials} материалов</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                        <span>{teacher.rating}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Посмотреть профиль
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Notifications Section */}
        <section className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Bell" size={20} />
                <span>Уведомления</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Icon name="Upload" size={16} className="text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Новый материал по Программированию</p>
                    <p className="text-xs text-gray-600">Иванов И.И. загрузил "React Hooks - подробное руководство"</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <Icon name="MessageCircle" size={16} className="text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Новый комментарий</p>
                    <p className="text-xs text-gray-600">К материалу "Математический анализ. Лекция 5"</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Icon name="Star" size={16} className="text-purple-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Высокий рейтинг</p>
                    <p className="text-xs text-gray-600">Ваш материал получил оценку 5 звезд</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <h3 className="font-inter font-semibold text-gray-900">EduShare</h3>
              </div>
              <p className="text-sm text-gray-600">
                Современная платформа для обмена учебными материалами между студентами и преподавателями.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Материалы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дисциплины</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поиск</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обратная связь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Следите за нами</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm">
                  <Icon name="Github" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
            <p>&copy; 2024 EduShare. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}